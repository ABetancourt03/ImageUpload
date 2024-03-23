import { useDropzone } from 'react-dropzone'
import '../styles/Dropzone.css'

function Dropzone () {
  const {
    acceptedFiles,
    fileRejections,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'image/jpg': ['.jpg'],
      'image/png': ['.png'],
      'image/gif': ['.gif']
    },
    maxFiles: 1,
    maxSize: 2000000,
    noClick: true,
    noKeyboard: true
  })

  const accepted = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const rejected = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ))

  return (
    <section>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop a file or <span className='text-[#3662E3] hover:cursor-pointer' onClick={open}>browse files</span></p>
      </div>
    </section>
  )
}

export default Dropzone
