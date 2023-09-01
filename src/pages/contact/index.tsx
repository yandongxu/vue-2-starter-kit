import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router/composables';
import styles from './styles.module.less';

const ContactPage = defineComponent({
  name: 'ContactPage',
  setup() {
    const route = useRoute();
    onMounted(() => {
      console.log(route);
    });
  },
  render() {
    return (
      <div class={styles.container}>
        <h1>ContactPage</h1>
      </div>
    );
  },
});

export default ContactPage;
