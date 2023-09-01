import { defineComponent } from 'vue';
import styles from './styles.module.less';

const DefaultLayout = defineComponent({
  name: 'DefaultLayout',
  render() {
    console.log('default-layout: mount!');
    return (
      <div class={styles.container}>
        <h2>DefaultLayout</h2>
        {this.$slots.default}
      </div>
    );
  },
});

export default DefaultLayout;
