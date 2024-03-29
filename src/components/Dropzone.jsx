import { useDropzone } from 'react-dropzone'
import '../styles/Dropzone.css'
import DropzoneIcon from '../icons/DropzoneIcon'

function Dropzone () {
  const {
    // acceptedFiles,
    // fileRejections,
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

  // const accepted = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ))

  // const rejected = fileRejections.map(({ file, errors }) => (
  //   <ul key={file.path}>
  //     {errors.map(e => (
  //       <li key={e.code}>{e.message}</li>
  //     ))}
  //   </ul>
  // ))

  return (
    <section className='dropzone-container shadow-xl p-3 rounded-lg w-11/12 h-1/2 2xl:w-1/2 xl:w-3/5 lg:w-3/4 md:w-4/5 sm:w-11/1'>
      <div className='dropzone w-full h-full' {...getRootProps()}>
        <input {...getInputProps()} />

        <DropzoneIcon className='mb-5' />

        <p className='dropzone-text font-medium pb-3'>Drag & drop a file or <span className='text-[#3662E3] hover:cursor-pointer' onClick={open}>browse files</span></p>
        <p className='font-thin text-sm filetypes'>JPG, PNG or GIF - Max file size 2MB</p>
      </div>
    </section>
  )
}

export default Dropzone
