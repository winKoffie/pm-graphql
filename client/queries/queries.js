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

export {ADD_CLIENT,  GET_CLIENTS, GET_CLIENT, DELETE_CLIENT };
