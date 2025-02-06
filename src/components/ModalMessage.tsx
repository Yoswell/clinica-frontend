import { toast } from 'sonner'

export const SonnerLoading = () => {
    const toastId = toast.custom((t) => (
        <div className='loading-modal'>
            <div className='d-flex align-center space-between'>
                <h6>
                    <i className="ri-loader-4-line"></i>
                    Cargando
                </h6>
                <button className='btn btn-modal-hide' onClick={() => toast.dismiss(t)}>Ocultar</button>
            </div>
        </div>
    ))

    setTimeout(() => {
        toast.dismiss(toastId)
    }, 1000)
}

export const SonnerSuccess = (data: string, time: number) => {
    setTimeout(() => {
        toast.custom((t) => (
            <div className='success-modal'>
                <div className='d-flex align-center space-between'>
                    <h6>
                        Mensage de exito
                    </h6>
                    <button className='btn btn-modal-hide' onClick={() => toast.dismiss(t)}>Ocultar</button>
                </div>
                <p>{data}</p>
            </div>
        ))
    }, time)
}

export const SonnerError = (data: string, time: number) => {
    setTimeout(() => {
        toast.custom((t) => (
            <div className='error-modal'>
                <div className='d-flex align-center space-between'>
                    <h6>
                        Mensage de error
                    </h6>
                    <button className='btn btn-modal-hide' onClick={() => toast.dismiss(t)}>Ocultar</button>
                </div>
                <p>{data}</p>
            </div>
        ))
    }, time)
}