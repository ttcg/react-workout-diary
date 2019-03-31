import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function setup() {
    library.add(faSpinner);
}

const FontAwesome = {
    setup
}

export default FontAwesome;