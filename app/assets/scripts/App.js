import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mm = new MobileMenu()
new RevealOnScroll(document.querySelectorAll(".feature-item"))
new RevealOnScroll(document.querySelectorAll(".testimonial"))

if(module.hot){
    module.hot.accept()
}
