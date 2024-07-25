function getFormvalue() {
    //Write your code here
	const submitButton = document.querySelector('input[type="submit"]');
	fname=document.getElementById('fname').value
	lname=document.getElementById('lname').value
	name= fname+" "+lname
	submitButton.addEventListener(("click"),()=>{alert(name)})
}
