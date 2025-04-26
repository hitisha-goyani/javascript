


function dataForm(){

    return (
            `
            <form id="formData" class="shadow p-3">
                <div class="row g-3" >
                    <div class="col-12">
                        <input type="text" class="form-control form-control-sm" placeholder="Enter name">
                    </div>
                    <div class="col-12">
                        <input type="number" class="form-control form-control-sm" placeholder="Enter age">
                    </div>
                    <div class="col-12">
                        <input type="url" class="form-control form-control-sm" placeholder="Enter Pic">
                    </div>
                    <div class="col-12">
                    <button class="btn btn-success btn-sm">Submit</button>
                    </div>
                </div>
            </form>
            `
    )
}

export default dataForm;