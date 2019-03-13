//var allBooks = books.titulo

var app = new Vue({
    el: "#app",
    data: {
        booksData: [],
        search: "",
        buttons: []
    },
    computed: {
       filteredBooks: function() {
           return this.booksData.filter((book) => {
               var nameFilter = book.titulo.toLowerCase().match(this.search.toLowerCase());
               var langFilter = this.buttons.includes(book.idioma) || this.buttons.length == 0;
               
               return nameFilter && langFilter
           })
       }
    },
    methods: {
        callAllFuncs() {
            var url = "https://api.myjson.com/bins/udbm5";

            var booksArr;
            var bookTitles;
            fetch(url, {
                    mode: "cors"
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (booksJson) {
                    console.log(booksJson)
                    booksArr = booksJson.books
                    bookTitles = booksJson.books.titulo
                    app.booksData = booksJson.books
                })
                .catch(error => console.log(error));
        }
    }
});

app.callAllFuncs();
