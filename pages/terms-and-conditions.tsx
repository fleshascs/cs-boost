export default function Contact() {
  return (
    <>
      <div className='pb-24 mt-8'>
        <h1 className='py-2 text-2xl font-bold'>Terms and conditions</h1>
        <h2 className='py-2 text-md font-medium'>Prohibited acts from your server</h2>
        <ul className='list-disc list-inside mb-6'>
          <li>Upload any .dll, .exe .cmd .jar .vbs .bat and similar malicious files</li>
          <li>Use auto-connect plugins</li>
          <li>Modify GameMenu, VGUI or practice any other forms of slowhacking</li>
          <li>
            Bind any default keys (W, A, S, D, SPACE, SHIFT, TAB), or to bind any forbidden cmds
            including CONNECT and SAY
          </li>
          <li>Boost fake servers</li>
          <li>Use any form of redirect</li>
          <li>Send any CMDs via SVC_DIRECTOR</li>
          <li>Change client rates (cl_updaterate, cl_cmdrate etc)</li>
          <li>Use plugins that destroy player's game, like Pika, GameDestroyer, etc</li>
        </ul>
        In case of violating any of these rules your services will be canceled without notice and
        server will be blacklisted to block it from purchasing any of our services in the future.
      </div>
    </>
  );
}
