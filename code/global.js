// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Go to Home button click
    $('#btnHome').on('click', goHome);

    // Go to Search button click
    $('#btnSearch').on('click', goSearch);

    // Go to Browse button click
    $('#btnBrowse').on('click', goBrowse);

    // Go to Trade Offers button click
    $('#btnTradeOffers').on('click', goTradeOffers);

    // Go to Trade History button click
    $('#btnTradeHistory').on('click', goTradeHistory);

    // Go to My Account button click
    $('#btnMyAccount').on('click', goAccount);

    // Change Visibility of Add to Library button click
    $('#btnAddToLibraryVisibility').on('click', changeAddToLibrary);

    // Add to Library button click
    $('#btnAddToLibrary').on('click', addToLibrary);

    // Change Visibility of Add to Wish List button click
    $('#btnAddToWishListVisibility').on('click', changeAddToWishList);

    // Add to WishList button click
    $('#btnAddToWishList').on('click', addToWishList);

    // Change Account button click
    $('#btnChangeAccount').on('click', changeAccount);


    // Delete from library click
    $('#library table tbody').on('click', 'td a.linkdeletefromlibrary', deleteFromLibrary);

    // Delete from wishlist click
    $('#wishList table tbody').on('click', 'td a.linkdeletefromwishlist', deleteFromWishList);

    // Add to Wish List click
    $('#browse table tbody').on('click', 'td a.linkaddtowishlist', addToWishList);

    // Offer Trade click
    $('#tradeOffers table tbody').on('click', 'td a.linkoffertrade', offerTrade);

    // Accept Trade click
    $('#tradeOffers table tbody').on('click', 'td a.linkaccepttrade', acceptTrade);

    // Rate Trade click
    $('#tradeHistory table tbody').on('click', 'td a.linkratetrade', rateTrade);

    

    // Populate the tables on initial page load
    populateLibraryTable();
    populateWishListTable();
    populateBrowse();
    populateTradeOffers();
    populateTradeHistory();
});

// Functions =============================================================

// Fill Library table with data
function populateLibraryTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/library', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.printrun + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td><a href="#" class="linkdeletefromlibrary" rel="' + this._id + '">Delete from Library</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#library table tbody').html(tableContent);
    });
};

// Fill Wish List table with data
function populateWishListTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/wishlist', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.printrun + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td><a href="#" class="linkdeletefromwishlist" rel="' + this._id + '">Delete from Wish List</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#wishList table tbody').html(tableContent);
    });
};

// Fill Browse table with data
function populateBrowseTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/browse', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.printrun + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td><a href="#" class="linkaddtowishlist" rel="' + this._id + '">Add to Wish List</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#browse table tbody').html(tableContent);
    });
};

// Fill Trade Offers table with data
function populateTradeOffers() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/tradeoffers', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.status + '</td>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.printrun + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td> <--> </td>';
            tableContent += '<td>' + this.trader + '</td>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.authorTrader + '</td>';
            tableContent += '<td>' + this.titelTrader + '</td>';
            tableContent += '<td>' + this.editionTrader + '</td>';
            tableContent += '<td>' + this.publisherTrader + '</td>';
            tableContent += '<td>' + this.printrunTrader + '</td>';
            tableContent += '<td>' + this.isbn10Trader + '</td>';
            tableContent += '<td>' + this.isbn13Trader + '</td>';
            tableContent += '<td><a href="#" class="linkoffertrade" rel="' + this._id + '">Offer Trade</a></td>';
            tableContent += '<td><a href="#" class="linkaccepttrade" rel="' + this._id + '">Accept Trade</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#tradeOffers table tbody').html(tableContent);
    });
};

// Fill Trade History table with data
function populateTradeHistory() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/tradehistory', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.status + '</td>';
            tableContent += '<td>' + this.bookID + '</td>';            
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.printrun + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td> <--> </td>';
            tableContent += '<td>' + this.trader + '</td>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.authorTrader + '</td>';
            tableContent += '<td>' + this.titelTrader + '</td>';
            tableContent += '<td>' + this.editionTrader + '</td>';
            tableContent += '<td>' + this.publisherTrader + '</td>';
            tableContent += '<td>' + this.printrunTrader + '</td>';
            tableContent += '<td>' + this.isbn10Trader + '</td>';
            tableContent += '<td>' + this.isbn13Trader + '</td>';
tableContent += '<td><a href="#" class="linkratetrade" rel="' + this._id + '">Rate Trade</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#tradeHistory table tbody').html(tableContent);
    });
};




// Add to Library
function addToLibrary(event) {
    event.preventDefault();

    // increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addToLibrary input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newEntry = {
            'bookID': $('#addToLibrary fieldset input#inputBookID').val(),
            'author': $('#addToLibrary fieldset input#inputAuthor').val(),
            'titel': $('#addToLibrary fieldset input#inputTitel').val(),
            'edition': $('#addToLibrary fieldset input#inputEdition').val(),
            'publisher': $('#addToLibrary fieldset input#inputPublisher').val(),
            'printrun': $('#addToLibrary fieldset input#inputPrintRun').val(),
            'isbn10': $('#addToLibrary fieldset input#inputISBN10').val(),
            'isbn13': $('#addToLibrary fieldset input#inputISBN13').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newEntry,
            url: '/users/addtolibrary',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addToLibrary fieldset input').val('');

                // Update the table
                populateLibraryTable();

            }
            else {

                // alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
}

// Add to WishList
function addToWishList(event) {
    event.preventDefault();

    // increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addToWishList input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newEntry = {
            'bookID': $('#addToWishList fieldset input#inputBookID').val(),
            'author': $('#addToWishList fieldset input#inputAuthor').val(),
            'titel': $('#addToWishList fieldset input#inputTitel').val(),
            'edition': $('#addToWishList fieldset input#inputEdition').val(),
            'publisher': $('#addToWishList fieldset input#inputPublisher').val(),
            'printrun': $('#addToWishList fieldset input#inputPrintRun').val(),
            'isbn10': $('#addToWishList fieldset input#inputISBN10').val(),
            'isbn13': $('#addToWishList fieldset input#inputISBN13').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newEntry,
            url: '/users/addtowishlist',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addToWishList fieldset input').val('');

                // Update the table
                populateWishListTable();

            }
            else {

                // alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
}

// Delete From Library
function deleteFromLibrary(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this entry?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deletefromlibrary/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateLibraryTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

// Delete User From WishList
function deleteFromWishList(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this entry?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deletefromWishList/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateWishTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};


// Go to Home
function goHome(event) {

    event.preventDefault();

};    

// Go to Search
function goSearch(event) {

    event.preventDefault();

};

// Go to Browse
function goBrowse(event) {

    event.preventDefault();

};

// Go to Trade Offers
function goTradeOffers(event) {

    event.preventDefault();

};

// Go to Trade History
function goTradeHistory(event) {

    event.preventDefault();

};

// Go to My Account
function goAccount(event) {

    event.preventDefault();

};

// Change visibility of Add to Library
function changeAddToLibrary(event) {

    event.preventDefault();
	$('button#btnAddToLibrary').on('click', function(){$('#addToLibrary').toggle();});
};

// Change Visibility of Add to Wish List
function changeAddToWishList(event) {

    event.preventDefault();

};

// Change Visibility of My Account
function changeAccount(event) {

    event.preventDefault();

};

// Offer Trade
function offerTrade(event) {

    event.preventDefault();

};

// Accept Trade
function acceptTrade(event) {

    event.preventDefault();

};

// Rate Trade
function rateTrade(event) {

    event.preventDefault();

};
