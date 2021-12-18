import {Component, OnInit} from '@angular/core'
import {UtilsService} from '../../../../core/services/utils/utils.service'
import {faGithub, faGitter} from '@fortawesome/free-brands-svg-icons'

@Component({
    selector: 'mindmapper-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public faGithub = faGithub
    public faGitter = faGitter

    constructor () {
    }

    public slide (selector: string, event: Event) {
        if (selector) {
            event.preventDefault()
            const element = document.querySelector(selector)

            window.scrollTo({
                behavior: 'smooth',
                top: element.getBoundingClientRect().top + window.scrollY - 70
            })
        }
    }

}