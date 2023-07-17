const DisplayInfo = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem ? (
        <div className="card mt-3">
          <div className="card-body">
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
