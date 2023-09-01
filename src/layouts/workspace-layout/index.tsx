import { defineComponent } from 'vue';
import styles from './styles.module.less';

const WorkspaceLayout = defineComponent({
  name: 'WorkspaceLayout',
  render() {
    console.log('[workspace] Re-render!');

    return (
      <div class={styles.container}>
        <h2>Workspace</h2>
        {this.$slots.default}
      </div>
    );
  },
});

export default WorkspaceLayout;
