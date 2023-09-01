import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router/composables';
import styles from './styles.module.less';

const HomePage = defineComponent({
  name: 'HomePage',
  setup() {
    const route = useRoute();
    onMounted(() => {
      console.log(route);
    });
  },
  render() {
    return (
      <div class={styles.container}>
        <h1>HomePage</h1>
      </div>
    );
  },
});

export default HomePage;
