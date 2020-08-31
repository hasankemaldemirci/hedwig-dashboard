<template>
  <div
    :class="{ 'metrics-card': true, 'metrics-card--flashed': isDataChanged }"
  >
    <div class="metrics-card__content">
      <div :class="`icon icon--${data.icon}`">
        <font-awesome-icon
          :icon="data.icon"
          size="lg"
          :style="{ color: '#fff' }"
        />
      </div>
      <div class="description">
        <div class="description__title">{{ data.title }}</div>
        <div class="description__count">{{ data ? data.metric : "-" }}</div>
      </div>
    </div>
    <div class="metrics-card__footer">
      <button @click="$store.dispatch(data.dispatchEvent)">
        <font-awesome-icon icon="redo" />
        {{ data.reloadButtonTitle }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetricsCard",
  props: {
    data: null
  },
  data() {
    return {
      isDataChanged: false
    };
  },
  watch: {
    data: {
      handler: function() {
        this.isDataChanged = true;

        setTimeout(() => {
          this.isDataChanged = false;
        }, 150);
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.metrics-card {
  height: 100%;
  padding: 15px 20px;
  background-color: $color-bg-cards;
  box-shadow: $box-shadow-cards;
  border-radius: 5px;
  color: #9a9a9a;
  transition: all ease-in-out 150ms;

  @media (max-width: 767px) {
    height: 145px;
  }

  &__content {
    display: flex;
    justify-content: space-between;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 50px;
      max-width: 50%;
      height: 50px;
      border-radius: 50%;

      &--user {
        background: rgb(239, 137, 126);
        background: linear-gradient(
          180deg,
          rgba(239, 137, 126, 1) 0%,
          rgba(238, 121, 138, 1) 100%
        );
      }

      &--download {
        background: rgb(198, 92, 209);
        background: linear-gradient(
          180deg,
          rgba(198, 92, 209, 1) 0%,
          rgba(183, 93, 225, 1) 100%
        );
      }

      &--eye {
        background: rgb(98, 216, 206);
        background: linear-gradient(
          180deg,
          rgba(98, 216, 206, 1) 0%,
          rgba(77, 176, 223, 1) 100%
        );
      }

      &--hand-holding-usd {
        background: rgb(230, 93, 120);
        background: linear-gradient(
          180deg,
          rgba(230, 93, 120, 1) 0%,
          rgba(223, 73, 69, 1) 100%
        );
      }
    }

    .description {
      text-align: right;

      &__title {
        font-size: 16px;
        font-weight: 500;
      }

      &__count {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  &__footer {
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px solid #2a2f46;

    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      color: inherit;

      svg {
        margin-right: 10px;
      }
    }
  }

  &--flashed {
    background-color: #2f3346;
    transform: scale(1.035);
  }
}
</style>
