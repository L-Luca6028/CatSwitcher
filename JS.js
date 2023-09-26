var count = 0;

function switchPic() {
 
    if(count == 0)
    {
        document.getElementById("Katzenbilder").src = "images/cat1.jpg";
        count++;
    }
    else if(count == 1)
    {
        document.getElementById("Katzenbilder").src = "images/cat2.jpg";
        count++;
    }
    else if(count == 2)
    {
        document.getElementById("Katzenbilder").src = "images/cat3.jpg";
        count++;
    }
    else if(count == 3)
    {
        document.getElementById("Katzenbilder").src = "images/cat4.jpg";
        count++;
    }
    else if(count == 4)
    {
        document.getElementById("Katzenbilder").src = "images/cat5.jpg";
        count = 0;
    }

}