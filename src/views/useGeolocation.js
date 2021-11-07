import {
    onUnmounted,
    onMounted,
    ref
} from 'vue'

export function useGeolocation() {
    const coords = ref({
        latitude: -38.24491861941165,
        longitude: -57.77853364819787
    })
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    let watcher = null
    onMounted(() => {
        if (isSupported)
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
            )
    })
    onUnmounted(() => {
        if (watcher) navigator.geolocation.clearWatch(watcher)
    })

    return {
        coords,
        isSupported
    }
}