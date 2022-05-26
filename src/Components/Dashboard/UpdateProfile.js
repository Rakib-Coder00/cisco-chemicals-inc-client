import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            <label for="update-modal" class="btn modal-button">open modal</label>

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div >
    );
};

export default UpdateProfile;