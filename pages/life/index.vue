<!-- eslint-disable prettier/prettier -->
<template>
  <div class="inline-flex flex-col flex-1 h-full lg:flex-row">
    <div class="inline-flex flex-col flex-1 p-4">
      <TranslateGroupDown>
        <TodayLife key="today" />
        <PastLife key="past" />
      </TranslateGroupDown>
    </div>
    <SidebarRight> </SidebarRight>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  head() {
    return {
      title: `Life - ${this.$store.state.name}`,
    }
  },
}
</script>
