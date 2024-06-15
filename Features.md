# Explore Engine is able to dynamically populate the list of strings from the store


<!-- TOC -->
* [Explore Engine is able to dynamically populate the list of strings from the store](#explore-engine-is-able-to-dynamically-populate-the-list-of-strings-from-the-store)
  * [explore-engine-server - Node JS](#explore-engine-server---node-js)
    * [Data Structures Used :](#data-structures-used--)
    * [Time Complexity :](#time-complexity--)
    * [Space Complexity :](#space-complexity--)
  * [explore-engine-view - React JS](#explore-engine-view---react-js)
    * [Optimization in the Front End](#optimization-in-the-front-end-)
<!-- TOC -->
---------

![demo.gif](demo.gif)


## explore-engine-server - Node JS
- explore-engine-server is a node js application build to handle the server side.
- It has a endpoint /words with query param "search" to fetch the words that matches the substring.

### Data Structures Used : 
- explore-engine-server uses trie Data Structure to store the words DB.
- explore-engine-server uses DFS to traverse the data structure to figure out the words.

### Time Complexity : 
- insertion => O(M)
- search => O(N * M)
where N is total no of Strings and M is the length of the strings

### Space Complexity : 
- Total Size => O(N * M)
where N is no of Strings and M is the length of the strings

------------

## explore-engine-view - React JS
- explore-engine-server is a react js application build to handle the front end.
- It has a search bar with list of sugesstions in the bottom div.

### Optimization in the Front End 
- we have introduced debounced search, instead of calling the API for every keyPress, we call the API when the timeout is reached
- (or) user gives some time after continuous typing, For now It is set to default value of 0ms.
- which help us reduce the overload of network calls on the server.

### Input Validations
- we accept only alpha numeric values
- we expect a minimum of two letter code to invoke the api
- we dont accept special character
- we throw inline warning for such negative scenarios

------------

## DB used for ExpressEngine is Elastic-Search : 

### why no-sql db ? 
- The Express Engine search has very little relation between the data. and it can have huge frequency of data load.
- no-sql is highly suitable for this scenario, where there is minimal relation between the data and
- handling huge load of data with high throughput and low latency

### why elastic seaarch is used ? 
- the considered options are mongo db and elastic search, which is more suitable for our search, handling multiple search queries
- we chose elastic search over mongo db for these major reasons.
  - elastic search uses inverted index for optimized querying.
  - elastic search also offers handling sharding, replication, low latency for querying which helps us in horizontal scalling as well.
- since express engine is mainly focused on search with low latency, we prefered elastic search.

### Optimizations done in express engine on DB :
- we chose elastic search to improve the search query performance.
- we have used **"size"** to reduce the number of response from the db, so that the query is not heavy.
- we used **"source"** to limit the no of fields from the response.
- Handled Exceptions gracefully.
