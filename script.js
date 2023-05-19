var currentPage = 1;
var pageCount = 1;
var totalUserCount = 1;
showData(currentPage);

function showData(currentPage) {
    myUsers = data();
    // 0 to 49
    //currentPage 1 -> 0 to 9 -> cond: i < 10*currentPage -> i = 10*(currentPage -1)
    //currentPage 2 -> 10 to 19 -> cond: i < 10*currentPage -> i = 10*(currentPage -1)

    for (var i = 10 * (currentPage - 1); i < 10 * currentPage; i++) {
        
      //  var contactList = document.getElementById('contact-list');
        var contactList2 = document.querySelector(`.contact-list`);
        let name = myUsers.results[i].name.first + " " + myUsers.results[i].name.last;
        let email = myUsers.results[i].email;
        let joinedDate = myUsers.results[i].registered.date;
        let pPic = myUsers.results[i].picture.large;
        let contactItemList = document.createElement("li");
        contactItemList.className = "contact-item cf";
        contactItemList.id = "contact-item cf";

        let contactDetailsDiv = document.createElement("div");
        contactDetailsDiv.className = "contact-details";

        let pImg = document.createElement("img");
        pImg.className = "avatar";
        pImg.src = pPic;

        let nameHeader = document.createElement("h3");
        nameHeader.innerText = name;

        let spanEmail = document.createElement("span");
        spanEmail.className = "email";
        spanEmail.innerText = email;

        contactDetailsDiv.appendChild(pImg);
        contactDetailsDiv.appendChild(nameHeader);
        contactDetailsDiv.appendChild(spanEmail);

        contactItemList.appendChild(contactDetailsDiv);

        let joinedDetailsDiv = document.createElement("div");
        let spanDate = document.createElement("span");
        spanDate.className = "date";
        spanDate.innerText = "Joined " + joinedDate.slice(0, 10);
        joinedDetailsDiv.appendChild(spanDate);

        contactItemList.appendChild(joinedDetailsDiv);

        contactList2.appendChild(contactItemList);

        if ((i+1) == myUsers.info.results) {
            i = 10 * currentPage;
        }


    }
    // Changing total

    totalUserCount = myUsers.info.results;
   // var pageHeader = document.getElementById('page-header cf');
    var pageHeader = document.querySelector(`.page-header`);
    let headerTotal = document.createElement("h3");
    headerTotal.className = "id-total-h3";
    headerTotal.innerText = "Total : " + totalUserCount;
    pageHeader.appendChild(headerTotal);

    // Creating page numbers related with the length of the datas
    /*
            <ul class="pagination">
           <li class="pagination li"><a href="" >1</a></li>
           <li class="pagination li"><a href="" >2</a></li>
           <li class="pagination li"><a href="" >3</a></li>
           <li class="pagination li"><a href="" >4</a></li>
   
           </ul>
   
    */
    console.log(myUsers.info.results);
    pageCount = Math.ceil(myUsers.info.results / 10);
    // console.log(pageCount);
   // const paginationUl = document.getElementById('pagination');
    const paginationUl = document.querySelector(`.pagination`);
    for (let i = 0; i < pageCount; i++) {
        let paginationListItem = document.createElement("li");
        paginationListItem.className = "pagination li";
        paginationListItem.id = "pagination li";
        let paginationLink = document.createElement("a");
        paginationLink.innerHTML = i + 1;
        paginationLink.onclick = function () {
            selectPage(i + 1);
        }
        paginationListItem.appendChild(paginationLink);
        paginationUl.appendChild(paginationListItem);
    }

}

function selectPage(id) {
    console.log("You've clicked the page " + id);
    currentPage = id;
    
    // let pheader = document.getElementById("id-total-h3");
    let pheader = document.querySelector(`.id-total-h3`);
    pheader.remove();

    let max = 10;
    
    if(currentPage == pageCount){
        max = totalUserCount%10;
        //console.log(max);
    }

    try{
        for (let i = 0; i < 10; i++) {
           // var contactList = document.getElementById('contact-list');
           var contactList = document.querySelector(`.contact-list`);
           contactList.removeChild(document.getElementById("contact-item cf"));
        }
    }catch(err){
        console.log();
    }
    

    // const paginationUl = document.getElementById('pagination');
    const paginationUl = document.querySelector(`.pagination`);
    let paginationChilds = document.querySelectorAll(`.pagination li`);
    paginationChilds.forEach(p => paginationUl.removeChild(p));
    // for (let i = 0; i < pageCount; i++) {
    //     paginationUl.removeChild(document.getElementById("pagination li"));
    // }
    showData(currentPage);


    /*
    <div class="page">
      <div class="page-header cf" id="page-header cf">
        <h2>Contacts</h2> 
      </div>
      <ul class="contact-list" id = "contact-list">
      </ul>
      <!-- Add pagination links in this section -->
      <ul class="pagination" id="pagination">
       
      </ul>
    </div>
    */

}