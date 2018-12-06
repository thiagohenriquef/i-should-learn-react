import React from 'react'

export default props => (
  <div className="form">
    <div className="row">
        <div className="col-12 col-md-6">
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control"
                    name="name"
                    value={props.name}
                    onChange={props.updateField}
                    placeholder="Enter a name..." />
            </div>
        </div>

        <div className="col-12 col-md-6">
            <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control"
                    name="email"
                    value={props.email}
                    onChange={props.updateField}
                    placeholder="Enter a e-mail..." />
            </div>
        </div>
    </div>

    <hr />
    <div className="row">
        <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-secondary"
                onClick={props.clear}>
                Cancel
            </button>
            <button className="btn btn-primary ml-2"
                onClick={props.save}>
                Save
            </button>
        </div>
    </div>
  </div>
)