import Uppy from '@uppy/core'
import FileInput from '@uppy/file-input'
import XHRUpload from '@uppy/xhr-upload'

function startXHRLimitTest (endpoint) {
  const uppy = new Uppy({
    id: 'uppyXhrLimit',
    debug: true,
    autoProceed: false,
  })
    .use(FileInput, { target: '#uppyXhrLimit', pretty: false })
    .use(XHRUpload, { endpoint, limit: 2 })

  uppy.uploadsStarted = 0
  uppy.uploadsComplete = 0

  uppy.on('upload-started', () => {
    uppy.uploadsStarted++
  })
  uppy.on('upload-success', () => {
    uppy.uploadsComplete++
  })
}

window.startXHRLimitTest = startXHRLimitTest
