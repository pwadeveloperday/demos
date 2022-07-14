const supported = ('contacts' in navigator && 'ContactsManager' in window);
const properties = await navigator.contacts.getProperties();
if (supported && properties.includes('tel')) {
  try {
    const props = ['name', 'email', 'tel', 'icon'];
    const opts = { multiple: true };
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // 处理异常
  }
}
