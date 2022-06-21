/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createCamp = /* GraphQL */ `
  mutation CreateCamp(
    $input: CreateCampInput!
    $condition: ModelCampConditionInput
  ) {
    createCamp(input: $input, condition: $condition) {
      id
      venue
      date
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateCamp = /* GraphQL */ `
  mutation UpdateCamp(
    $input: UpdateCampInput!
    $condition: ModelCampConditionInput
  ) {
    updateCamp(input: $input, condition: $condition) {
      id
      venue
      date
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteCamp = /* GraphQL */ `
  mutation DeleteCamp(
    $input: DeleteCampInput!
    $condition: ModelCampConditionInput
  ) {
    deleteCamp(input: $input, condition: $condition) {
      id
      venue
      date
      image
      createdAt
      updatedAt
    }
  }
`;
