const { projects, clients } = require('../sampleData.js');

// Mongoose Models
const Project = require('../models/Project');
const Client = require('../models/Client');

// GraphQL Types
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = require('graphql');

/**
 * ============================
 * GraphQL Type Definitions
 * ============================
 */

/** 
 * Client Type 
 * Represents a client entity with basic contact info
 */
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

/** 
 * Enum Type for Project Status 
 * Controls valid status values to ensure consistency across app & DB
 */
const ProjectStatusEnum = new GraphQLEnumType({
  name: 'ProjectStatusEnum',
  values: {
    NEW: { value: 'Not Started' },
    PROGRESS: { value: 'In Progress' },
    COMPLETED: { value: 'Completed' }
  }
});

/** 
 * Project Type 
 * Represents a project, linked to a client via clientId
 */
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      // Resolver to fetch client details from clientId
      resolve(parent, args) {
        if (!parent.clientId) return null;
        return Client.findById(parent.clientId);
      }
    }
  }),
});

/**
 * ============================
 * Root Query (Read Operations)
 * ============================
 */

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Fetch all clients
    clients: {
      type: new GraphQLList(ClientType),
      resolve() {
        return Client.find();
      }
    },

    // Fetch single client by ID
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      }
    },

    // Fetch all projects
    projects: {
      type: new GraphQLList(ProjectType),
      resolve() {
        return Project.find();
      }
    },

    // Fetch single project by ID
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    }
  }
});

/**
 * ============================
 * Mutations (Write Operations)
 * ============================
 */

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    /** 
     * Add Client 
     * Create new client document
     */
    addClient: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone
        });
        return client.save();
      }
    },

    /** 
     * Delete Client 
     * Deletes client and related projects to prevent orphaned projects
     */
    deleteClient: {
      type: ClientType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parent, args) {
        // Cascade delete: remove projects linked to this client
        await Project.deleteMany({ clientId: args.id });
        return Client.findByIdAndDelete(args.id);
      }
    },

    /** 
     * Add Project 
     * Creates new project associated with existing client
     */
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: ProjectStatusEnum, defaultValue: 'Not Started' },
        clientId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status || 'Not Started', // Safe fallback
          clientId: args.clientId,
        });
        return project.save();
      }
    },

    /** 
     * Delete Project 
     * Deletes a project by ID
     */
    deleteProject: {
      type: ProjectType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Project.findByIdAndDelete(args.id);
      }
    },

    /** 
     * Update Project 
     * Updates project fields by ID
     */
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: ProjectStatusEnum },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            }
          },
          { new: true } // Return updated document
        );
      }
    }
  }
});

/**
 * ============================
 * Export GraphQL Schema
 * ============================
 */

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
