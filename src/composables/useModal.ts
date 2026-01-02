import { ref, type Component } from 'vue'

interface ModalOptions {
  component: Component
  props?: ModalProps
}

interface ModalProps {
  title?: string
  subTitle?: string
  isMobile?: boolean
}
const isOpen = ref(false)
const modalComponent = ref<Component | null>(null)
const modalProps = ref<ModalProps>({})

const disableScroll = () => {
  document.body.style.cssText = 'overflow-y: hidden;'
}

const ableScroll = () => {
  document.body.style.cssText = ''
}

export const useModal = () => {
  const openModal = (options: ModalOptions) => {
    disableScroll()
    isOpen.value = true
    modalComponent.value = options.component
    modalProps.value = options.props || {}
  }

  const closeModal = () => {
    ableScroll()
    isOpen.value = false
    modalComponent.value = null
    modalProps.value = {}
  }

  return {
    isOpen,
    modalComponent,
    modalProps,
    openModal,
    closeModal,
  }
}
