export const apiError = (message, status = 400) => {
    return Response.json(
        {
            success: false,
            message,
        },
        { status }
    );
};