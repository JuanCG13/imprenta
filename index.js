var Prismic = require( 'prismic-javascript' );

var apiEndpoint = "https://elancla.cdn.prismic.io/api/v2";

Prismic.getApi( apiEndpoint, { req: req } ).then( function ( api ) {
    return api.query( "" ); // An empty query will return all the documents
} ).then( function ( response ) {
    console.log( "Documents: ", response.results );
}, function ( err ) {
    console.log( "Something went wrong: ", err );
} );