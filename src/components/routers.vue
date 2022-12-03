<script setup>

import Depasse from '../services/depasse'
import PasLimite from '../services/pasLimite'
import EncoreTemps from '../services/encoreTemps'
import DansTemps from '../services/dansTemps'
import HorsTemps from '../services/horsTemps'
import Validate from '../services/validates'
import {ref} from'vue'

const depasse = new Depasse();
const pasLimite = new PasLimite();
const encoreTemps = new EncoreTemps();
const dansTemps = new DansTemps();
const horsTemps = new HorsTemps();
const validate = new Validate();


</script>