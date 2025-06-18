import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
mutation addClient($name: String!, $email: String!, $phone: String!) {
  addClient(name: $name, email: $email, phone: $phone) {
    id
    name
    email
    phone
  }
}
`;

const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
      status
      client {
        id
        name
      }
    }
  }
`;

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: ProjectStatusEnum!  # <-- updated enum name
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
    `;

export { ADD_CLIENT, GET_CLIENTS, GET_CLIENT, DELETE_CLIENT, GET_PROJECTS, GET_PROJECT, ADD_PROJECT,DELETE_PROJECT };
