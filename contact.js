function afficher() 
{          
    let nom = document.querySelector(".nom"),      
    email = document.querySelector(".email"),       
    sujet = document.querySelector(".sujet");       
    let description = document.querySelector(".message");         
    if(nom.value==="" || email.value==="" || sujet.value==="" || description.value==="")
    {
        window.alert("somthing wrong");    
    }
    else
    {
        window.alert("Votre nom : "+nom.value+ 
                     "\nemail : "+email.value+
                     "\nsujet : "+sujet.value+
                     "\nmessage : "+description.value);
    }
}