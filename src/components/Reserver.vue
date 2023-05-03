<template>
  <div class="d-flex flex-column text-center bg-light rounded py-8 px-5 mb-10">
   
  </div>
</template>

<script>
export default {
  name: "Reserver",
  created() {
    const notification = document.createElement("div");
    notification.classList.add(
      "alert",
      "alert-success",
      "alert-dismissible",
      "fade",
      "show"
    );
    notification.innerHTML = `
      <strong>ชำระเงินเส็จสิ้น</strong> ท่านได้ทำการจองเสร็จสิ้น
    `;
    document.body.prepend(notification);
    setTimeout(() => {
      notification.parentNode.removeChild(notification);
      this.$router.push("/reservation_list");
    }, 1000);
  },
};
</script>

<style>
/* Add custom styles here */
</style>
