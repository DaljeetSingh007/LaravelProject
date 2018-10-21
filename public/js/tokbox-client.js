function handleError(error) {
    if (error) {
        alert(error.message);
    }
}

function initializeSession() {
    var session = OT.initSession(API_KEY, SESSION_ID);
    // Connect to the session
    session.connect(TOKEN, function (error) {
        // If the connection is successful, publish to the session
        if (error) {
            handleError(error);
        } else {
            session.on('streamCreated', function (event) {
                session.subscribe(event.stream, 'subscriber', {
                    insertMode: 'append',
                    width: '100%',
                    height: '100%'
                }, handleError);
            });
        }
    });
}
