type GraphQLErrorType = {
    locations: Array<any>,
    message: string
}

type ErrorType = {
    graphQLErrors: Array<GraphQLErrorType>,
    message: string,
    networkError: any
}

export default (
    error: ErrorType = { graphQLErrors: [], message: '', networkError: null }
) =>
    error.graphQLErrors[0]
        ? error.graphQLErrors[0].message
        : 'Something went wrong, try again shortly.'
