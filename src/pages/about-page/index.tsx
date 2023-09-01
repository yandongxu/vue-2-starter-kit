import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router/composables';
import styles from './styles.module.less';

const AboutPage = defineComponent({
  name: 'AboutPage',
  setup() {
    const route = useRoute();
    onMounted(() => {
      console.log(route);
    });
  },
  render() {
    return (
      <div class={styles.container}>
        <h1>AboutPage</h1>
      </div>
    );
  },
});

export default AboutPage;
