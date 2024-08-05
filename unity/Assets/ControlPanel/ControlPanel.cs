using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public class ControlPanel : MonoBehaviour
    {
        [SerializeField] private GameObject _stage;
        private Show[] _shows;
        private Button[] _buttons;

        void Start()
        {
            _shows = _stage.GetComponentsInChildren<Show>(true);
            _buttons = new Button[_shows.Length];
            for (var i = 0; i < _shows.Length; i++)
            {
                _buttons[i] = _shows[i].button;
                _buttons[i].onPressed += OnSelected;
            }
        }

        private void OnSelected(int id)
        {
            for (var i = 0; i < _buttons.Length; i++)
            {
                var isSelected = _buttons[i].GetInstanceID() == id;
                _buttons[i].State(isSelected);
                _shows[i].gameObject.SetActive(isSelected);
            }
        }
    }
}
