import './items/ItemSaver.js';
import './mock/LoadMockItems.js';

import { filterInput, sortSelect } from './forms/SearchForm.js';
import { createButton } from './forms/AddForm.js';
import { refresh } from './items/ItemRenderer.js';

refresh();

filterInput.addEventListener('input', refresh);
sortSelect.addEventListener('change', refresh);
createButton.addEventListener('click', refresh);
