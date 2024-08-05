using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace FiveButtons
{
    public enum ShowType
    {
        RED,
        ORANGE,
        GREEN,
        BLUE,
        PURPLE
    }
    
    public abstract class Show : MonoBehaviour
    {
        public Button button;
        
        protected Ball[] _balls;
        protected float _time;
        
        private Color _color;

        private void Start()
        {
            _balls = GetComponentsInChildren<Ball>();
            InitColor();
            gameObject.SetActive(false);
        }

        private void OnEnable()
        {
            _time = 0;
        }

        private void Update()
        {
            Launch();
        }

        private void InitColor()
        {
            _color = GetColor();
            
            button.light.SetColor(_color);

            foreach (var ball in _balls)
            {
                ball.SetColor(_color);
            }
        }

        protected abstract Color GetColor();

        private void Launch()
        {
            Anim();
            _time++;
        }
        
        protected abstract void Anim();
    }
}