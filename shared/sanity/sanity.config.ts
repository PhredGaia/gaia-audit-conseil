import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// Imports relatifs nécessaires car Sanity Studio (Vite) ne reconnaît pas les alias TypeScript
import home from '../../features/home/home.schema';
import offres from '../../features/offres/offres.schema';
import formations from '../../features/formations/formations.schema';
import actualite from '../../features/actualites/actualite.schema';

export default defineConfig({
	name: 'default',
	title: 'GAIA Studio',
	projectId: 'jtlf060d',
	dataset: 'production',
	plugins: [deskTool()],
	schema: {
		types: [home, offres, formations, actualite]
	}
});
