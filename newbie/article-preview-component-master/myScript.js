let buttonSmallScreen = true;
let buttonLargeScreen = true;
let widthScreen = window.innerWidth;

function showSocialMedia(value) {

    if(widthScreen < "900") {
        if(buttonSmallScreen) {
            //Modifty the social media button
            value.style.background = "hsl(214, 17%, 51%)";
            let btn = document.getElementById("container-icon-share");
            let iconShare = btn.querySelector("#icon-share");
            iconShare.style.filter = "brightness(0) saturate(100%) invert(89%) sepia(35%) saturate(7%) hue-rotate(146deg) brightness(111%) contrast(102%)";
    
            //Change the background color of the avatar section
            let colorSection = document.getElementById("avatar-section");
            colorSection.style.background = "hsl(217, 19%, 35%)";
            colorSection.style.height = "61px";
            colorSection.style.transition = "background 0.2s ease-out 0.2s";
    
            //Create the text SHARE
            const paragraphShare = document.createElement("p");
            const node = document.createTextNode("SHARE");
            paragraphShare.appendChild(node);
            paragraphShare.id = "id-share";
    
            paragraphShare.style.color = "white";
            paragraphShare.style.marginBottom = "0px";
            paragraphShare.style.paddingLeft = "0px";
            paragraphShare.style.fontFamily = 'Manrope';
            paragraphShare.style.letterSpacing = "5px";
            paragraphShare.style.opacity = "0.5";
            paragraphShare.style.fontSize = "12px";
    
            const parent = document.getElementById("container-photo-text");
            const child = document.getElementById("avatar-michelle");
            parent.replaceChild(paragraphShare, child);
    
            const p1 = document.getElementById("p1");
            p1.remove();
    
            const p2 = document.getElementById("p2");
            p2.remove();
    
            const facebookIcon = document.createElement("img");
            facebookIcon.src = "images/icon-facebook.svg";
            facebookIcon.alt = "facebook-icon";
            facebookIcon.style.marginRight = "10px";
            facebookIcon.style.cursor = "pointer";
            facebookIcon.id = "facebook-icon";
    
            const twitterIcon = document.createElement("img");
            twitterIcon.src = "images/icon-twitter.svg";
            twitterIcon.alt = "twitter-icon";
            twitterIcon.style.cursor = "pointer";
            twitterIcon.id = "twitter-icon";
            twitterIcon.style.marginRight = "10px";
    
            const pinterestIcon = document.createElement("img");
            pinterestIcon.src = "images/icon-pinterest.svg";
            pinterestIcon.alt = "pinterest-icon";
            pinterestIcon.style.cursor = "pointer";
            pinterestIcon.id = "pinterest-icon"; 
    
            const containerParagraphs = document.getElementById("paragraph-container");
    
            containerParagraphs.appendChild(facebookIcon);
            containerParagraphs.appendChild(twitterIcon);
            containerParagraphs.appendChild(pinterestIcon);
    
            buttonSmallScreen = false;
        }
        else {
            //Modifty the social media button
            value.style.background = "hsl(210, 46%, 95%)";
            let btn = document.getElementById("container-icon-share");
            let iconShare = btn.querySelector("#icon-share");
            iconShare.style.filter = "brightness(0) saturate(100%) invert(52%) sepia(9%) saturate(992%) hue-rotate(175deg) brightness(92%) contrast(87%)";
    
            //Change the background color of the avatar section
            let colorSection = document.getElementById("avatar-section");
            colorSection.style.background = "white";
            colorSection.style.transition = "background 0s linear 0s";
    
            //Remove the text SHARE
            const childText = document.getElementById("id-share");
            childText.remove();
    
            const childImg = document.createElement("img");
            childImg.src = "images/avatar-michelle.jpg";
            childImg.id = "avatar-michelle";
            childImg.style.marginRight = "10px";
    
            const parent = document.getElementById("container-photo-text");
            const childContainer = document.getElementById("paragraph-container");
            
            parent.insertBefore(childImg, childContainer);
    
            const facebookIcon = document.getElementById("facebook-icon");
            facebookIcon.remove();
    
            const twitterIcon = document.getElementById("twitter-icon");
            twitterIcon.remove();
    
            const pinterestIcon = document.getElementById("pinterest-icon");
            pinterestIcon.remove();
    
            const firstParagraph = document.createElement("p");
            const firstParagraphText = document.createTextNode("Michelle Appleton");
            firstParagraph.appendChild(firstParagraphText);
            firstParagraph.id = "p1";
    
            const secondParagraph = document.createElement("p");
            const secondParagraphText = document.createTextNode("28 Jun 2020");
            secondParagraph.appendChild(secondParagraphText);
            secondParagraph.id = "p2";
    
            childContainer.appendChild(firstParagraph);
            childContainer.appendChild(secondParagraph);
    
            buttonSmallScreen = true;
        }
    }
    else {
        if(buttonLargeScreen) {
            const container = document.getElementById("container-social-media");
            container.style.display = "flex";

            value.style.background = "hsl(214, 17%, 51%)";
            let btn = document.getElementById("container-icon-share");
            let iconShare = btn.querySelector("#icon-share");
            iconShare.style.filter = "brightness(0) saturate(100%) invert(89%) sepia(35%) saturate(7%) hue-rotate(146deg) brightness(111%) contrast(102%)";

            buttonLargeScreen = false;
        }
        else {
            const container = document.getElementById("container-social-media");
            container.style.display = "none";

            value.style.background = "hsl(210, 46%, 95%)";
            let btn = document.getElementById("container-icon-share");
            let iconShare = btn.querySelector("#icon-share");
            iconShare.style.filter = "brightness(0) saturate(100%) invert(52%) sepia(9%) saturate(992%) hue-rotate(175deg) brightness(92%) contrast(87%)";
    
            buttonLargeScreen = true;
        }
    }
}