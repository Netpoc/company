import Form from 'react-bootstrap/Form';

const DisplayInfo = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem ? (
        <div className="card mt-3">
          <div className="card-body">
            <div className="row">
                <div className="col">
                <Form.Label>Online Portion</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
                <div className="col">
                <Form.Label>Education</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
                <div className="col">
                <Form.Label>Admin & All</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Form.Label>Online Portion</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
                <div className="col">
                <Form.Label>Education</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
                <div className="col">
                <Form.Label>Admin & All</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Form.Label>Online Portion</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
                <div className="col">
                <Form.Label>Education</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
                <div className="col">
                <Form.Label>Admin & All</Form.Label>
                      <Form.Control size="sm" placeholder={selectedItem.description} />
                </div>
            </div>
            <h5 className="card-title">{selectedItem.name}</h5>
            <p className="card-text">{selectedItem.description}</p>
          </div>
        </div>
      ) : (
        <p>No item selected.</p>
      )}
      
    </div>
  );
};

export default DisplayInfo;
