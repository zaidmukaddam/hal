/* eslint-disable prettier/prettier */
export default function ({ store, redirect }) {
  if (!store.state.authUser) {
    return redirect('/enter')
  }
}
