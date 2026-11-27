export function WhatsAppButton() {
    const phoneNumber = "573209576723"; 
    const message = encodeURIComponent(
      "Hola, me gustaría recibir asesoría sobre Cerebiia Data."
    );
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-9 w-9"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.1 28.8l6.584-1.726A12.74 12.74 0 0 0 16.004 28.8c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.434a10.58 10.58 0 0 1-5.402-1.48l-.388-.23-3.908 1.024 1.044-3.808-.252-.402a10.584 10.584 0 0 1-1.628-5.738c0-5.864 4.77-10.634 10.634-10.634 2.84 0 5.51 1.106 7.518 3.116a10.566 10.566 0 0 1 3.116 7.518c0 5.864-4.77 10.634-10.634 10.634zm5.834-7.966c-.32-.16-1.892-.934-2.186-1.04-.294-.106-.508-.16-.72.16-.214.32-.826 1.04-1.014 1.254-.186.214-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.492.14-.652.144-.144.32-.374.48-.56.16-.186.214-.32.32-.534.106-.214.054-.4-.026-.56-.08-.16-.72-1.734-.988-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.214 0-.56.08-.854.4-.294.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.214 2.256 3.444 5.466 4.83.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.128.614-.092 1.892-.774 2.158-1.52.266-.748.266-1.388.186-1.52-.08-.134-.294-.214-.614-.374z" />
        </svg>
      </a>
    );
  }