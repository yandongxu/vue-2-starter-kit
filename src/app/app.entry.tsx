import { defineComponent } from 'vue';
import * as layouts from '@/layouts';
import { useRoute } from 'vue-router/composables';
import Null from '@/components/null';

type DynamicLayoutName = keyof typeof layouts;

const AppEntry = defineComponent({
  name: 'AppEntry',
  setup() {
    const route = useRoute();
    return () => {
      const Layout = layouts[route.meta?.layout as DynamicLayoutName] ?? Null;
      return (
        <div id="app">
          <nav>
            <router-link to="/">Home</router-link>
            <span>|</span>
            <router-link to="/about">About</router-link>
            <span>|</span>
            <router-link to="/contact">Contact</router-link>
          </nav>
          <Layout>
            <router-view />
          </Layout>
        </div>
      );
    };
  },
});

export default AppEntry;
