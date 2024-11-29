var sites = [];
var site = {};
var check = true;

if (localStorage.getItem('localsites') != null) {
    sites = JSON.parse(localStorage.getItem('localsites'))
    display()
}

function add() {
 
    if(validaionname()==true&&validaionurl()==true){
    site = {
        sname: document.getElementById('siteName').value,
        surl: document.getElementById("siteURL").value
    }

    sites.push(site)
    localStorage.setItem('localsites', JSON.stringify(sites))
    display()

    clear()
   }
   else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
   }
}



function clear() {
    document.getElementById('siteName').value = null;
    document.getElementById("siteURL").value = null;

}

function display() {
    index = 0;

    var content = ""
    for (var i = 0; i < sites.length; i++) {
        index = i + 1
        content += ` <tr>
    <th scope="row">`+ index + `</th>
    <td>`+ sites[i].sname + `</td>
    <td><a href="`+ sites[i].surl + `" target="_blank"><button type="button" class="btn btn-success"> <i class="fa-solid fa-eye"></i>Visit</button></a></td>
    <td><button onclick="deletee(`+ i + `)" type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i>Delete </button></td>
  </tr>`
    }
    document.getElementById('allrows').innerHTML = content
}
function deletee(index) {

    sites.splice(index, 1)
    localStorage.setItem('localsites', JSON.stringify(sites))
    display()
}

function validaionname(){
    var text=document.getElementById('siteName').value;
    var rgex=/^[A-Z][a-z]{3,20}$/
    var alert=document.getElementById('namealert')
    if(rgex.test(text))
    {
    
   alert.classList.add('d-none')
    document.getElementById('siteName').classList.add('is-valid')
    document.getElementById('siteName').classList.remove('is-invalid')
    return true;
}
    else{

        alert.classList.remove('d-none')
        document.getElementById('siteName').classList.add('is-invalid')


    }
}
function validaionurl(){
    var text=document.getElementById('siteURL').value;
    var rgex=/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
    var alert=document.getElementById('urlalert')
    if(rgex.test(text))
    {
       
   alert.classList.add('d-none')
    document.getElementById('siteURL').classList.add('is-valid')
    document.getElementById('siteURL').classList.remove('is-invalid')
    return true;
}
    else{

        alert.classList.remove('d-none')
        document.getElementById('siteURL').classList.add('is-invalid')


    }
}