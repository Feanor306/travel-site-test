import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

// REACT CODE
import React from 'react'
import ReactDOM from 'react-dom'

// Import Our React Component
import MyAmazingComponent from './modules/MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))

//import Modal from './modules/Modal'
//new Modal()

new ClientArea()
new MobileMenu()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let modal
document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if(typeof modal == "undefined"){
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x =>{
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("Modal problem."))
        } else {
            modal.openTheModal();
        }
    })
})

if(module.hot){
    module.hot.accept()
}
