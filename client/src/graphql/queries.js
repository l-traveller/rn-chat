import gql from 'graphql-tag';

export const CONTACTS_QUERY = gql`
  query ContactsQuery($id: Int!) {
    contacts(id: $id) {
      id
      email
      username
      avatar
      description
    }
  }
`;

export const USERS_QUERY = gql`
  query UsersQuery($id: Int!) {
    users(id: $id) {
      id
      email
      username
      avatar
      description
    }
  }
`;

export const CHATS_QUERY = gql`
  query ChatsQuery($userId: Int!) {
    chats(userId: $userId) {
      id
      updatedAt
      lastMessage {
        text
        createdAt
      }
      users {
        username
        avatar
      }
    }
  }
`;

export const USER_QUERY = gql`
  query UserQuery($id: Int!) {
    user(id: $id) {
      id
      email
      username
      avatar
      description
      lastActiveAt
    }
  }
`;

export const CHAT_QUERY = gql`
  query ChatQuery($chatId: Int!) {
    chat(chatId: $chatId) {
      id
      createdAt
      updatedAt
      messages {
        id
        text
        createdAt
        from {
          id
          username
          avatar
        }
      }
    }
  }
`;
