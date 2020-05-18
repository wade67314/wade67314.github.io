// mobile_bar clickevent & animation

$(".mobile_bar").click(function () {
    if ($(".navitems_insidebar").hasClass("display_none")) {
        document.querySelector(".navitems_insidebar").classList.remove("display_none");
        gsap.to(".lineT", { backgroundColor: "#eee", duration: 0.5 })
        gsap.to(".lineB", { backgroundColor: "#eee", duration: 0.5 })
        gsap.to(".mobile_bar", { rotate: -90, duration: 0.5 });
        gsap.fromTo(".navitems_insidebar", { opacity: 0 }, { opacity: 1, duration: 0.5 });

    }
    else {
        setTimeout(function () {
            document.querySelector(".navitems_insidebar").classList.add("display_none");
        }, 1000);
        gsap.to(".lineT", { backgroundColor: "#49c0c4", duration: 0.5 })
        gsap.to(".lineB", { backgroundColor: "#49c0c4", duration: 0.5 })
        gsap.to(".mobile_bar", { rotate: 0, duration: 0.5 });
        gsap.fromTo(".navitems_insidebar", { opacity: 1 }, { opacity: 0, duration: 1 });
    }
})

var line = gsap.timeline({ repeat: -1 });
line.fromTo(".lineT", { width: 45 }, { width: 0, duration: 0.8, delay: 1 });
line.fromTo(".lineB", { width: 27 }, { width: 0, duration: 0.3 });
line.fromTo(".lineT", { width: 0 }, { width: 45, duration: 0.8, delay: 1 });
line.fromTo(".lineB", { width: 0 }, { width: 27, duration: 0.3 });

//ripple hover
window.addEventListener('load', () => {
    const nodes = document.querySelectorAll('.ripple');
    for (let i = 0; i < nodes.length; i++) {
        let letters = nodes[i].innerText.split('').join('</span><span>');
        letters = letters.split(' ').join('&nbsp;');
        nodes[i].innerHTML = `<span>${letters}</span>`;

        const children = nodes[i].childNodes;
        for (let j = 0; j < children.length; j++) {
            children[j].style.animationDelay = (j / 10) + 's';
        }
    }
})