import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faSpinner,
    faUserSlash
} from '@fortawesome/free-solid-svg-icons'
import { 
    faThumbsUp
} from '@fortawesome/free-regular-svg-icons'

function setup() {
    library.add(
        fab,
        faSpinner,
        faThumbsUp,
        faUserSlash,
    );
}

const FontAwesome = {
    setup
}

export default FontAwesome;