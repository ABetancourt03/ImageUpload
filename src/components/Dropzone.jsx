import { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import '../styles/Dropzone.css'
import DropzoneIcon from '../icons/DropzoneIcon'

const dropzoneStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderWidth: 3,
  borderRadius: 6,
  borderColor: '#E5E7EB75',
  borderStyle: 'dashed',
  backgroundColor: '#FFFFFF',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: '#C2DAF9'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

function Dropzone () {
  const {
    // acceptedFiles,
    // fileRejections,
    open,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
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

  const style = useMemo(() => ({
    ...dropzoneStyles,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ])

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
    <section className='bg-white shadow-xl p-3 rounded-lg w-11/12 h-1/2 2xl:w-1/2 xl:w-3/5 lg:w-3/4 md:w-4/5 sm:w-11/12'>
      <div className='w-full h-full' {...getRootProps({ style })}>
        <input {...getInputProps()} />

        <DropzoneIcon className='mb-5' />

        <p className='font-medium pb-3'>Drag & drop a file or <span className='text-[#3662E3] hover:cursor-pointer' onClick={open}>browse files</span></p>
        <p className='font-normal text-sm text-[#4D5562]'>JPG, PNG or GIF - Max file size 2MB</p>
      </div>
    </section>
  )
}

export default Dropzone
